import React from 'react'
import { Input } from 'semantic-ui-react'

type EmailProps = {}
type PasswordProps = {}

const LoginInput = {

    Email: (props: EmailProps) => {
        return (
            <Input size='large' className='login-input' fluid/>
        )
    },
    Password: (props: PasswordProps) => {
        return (
            <Input className='login-input' type='password' fluid/>
        )
    }
}

export default LoginInput