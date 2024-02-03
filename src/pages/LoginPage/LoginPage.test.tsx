import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import LoginPage from './LoginPage';
import React from 'react'

describe('login page', () => {
    it('renders', async () => {
        const { getByRole } = await render(<LoginPage />)
        expect(getByRole('button')).toBeInTheDocument()
    })

    describe('form', () => {
        describe('email input', () => {
            it('validates email', async () => {
                const { getByRole, getByPlaceholderText, getByText } = await render(<LoginPage />)
                const emailInput =  getByPlaceholderText('Email')

                fireEvent.change(emailInput, { target: { value: 'bademail.com' } })
                waitFor(() => {
                    expect(getByText('bademail.com')).toBeTruthy()
                    expect(getByRole('button')).toBeDisabled()
                })
                await fireEvent.reset(emailInput);

                fireEvent.change(emailInput, { target: { value: 'good@email.com' } })
                waitFor(() => {
                    expect(getByText('good@email.com')).toBeTruthy()
                    expect(getByRole('button')).not.toBeDisabled()
                })
            })
        })
        describe('submit button', () => {
            it('is disabled when rendered', async () => {
                const { getByRole } = await render(<LoginPage />)
                expect(getByRole('button')).toBeDisabled()
            })
            it('is disabled when password is not present', async () => {
                const { getByRole, getByPlaceholderText } = await render(<LoginPage />)
                const passwordInput = getByPlaceholderText('Password')
                const emailInput = getByPlaceholderText('Email')
                fireEvent.change(emailInput, { target: { value: 'good@email.com' } })

                waitFor(() => {
                    expect(emailInput.textContent).toBe('good@email.com')
                })

                expect(passwordInput.textContent).toBe('')
                expect(getByRole('button')).toBeDisabled()
            })
            it('is clickable when email is valid and password is present', async () => {
                const { getByRole, getByPlaceholderText } = await render(<LoginPage />)
                const emailInput = getByPlaceholderText('Email')
                const passwordInput = getByPlaceholderText('Password')
                fireEvent.change(emailInput, { target: { value: 'good@email.com' } })
                fireEvent.change(passwordInput, { target: { value: 'password' } })
                waitFor(() => {
                    expect(emailInput.textContent).toBe('good@email.com')
                    expect(passwordInput.textContent).toBe('password')
                })
                expect(getByRole('button')).not.toBeDisabled()
            })
        })
    })
})