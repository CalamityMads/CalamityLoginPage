import { Button, Form, FormField, Grid, GridColumn, GridRow, Icon, Input, Message } from "semantic-ui-react"
import { ReactComponent as Calamity } from '../../assets/calamity.svg'
import React, { useMemo, useState } from "react"
import * as EmailValidator from 'email-validator';
import { sendLoginRequest } from "../../helpers/api";



type Props = {}

const LoginPage = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState<{ error?: string }>({})
    const emailIsValid = useMemo(() => email.length > 4 ? EmailValidator.validate(email) : null, [email])

    const ErrorIcon = () => {
        return <Icon name='exclamation circle' color='red' />
    }

    const callLogin = async () => {
        const loginCreds = { "email": email, "password": password }
        const data = await sendLoginRequest(loginCreds)
        setResponse(data)
        console.log(data)
    }

    return (
        <Grid centered>
            <GridRow columns={1}>
                <GridColumn textAlign="center">
                    <Calamity className='App-logo' />
                </GridColumn>
            </GridRow>
            <GridRow columns={12}>
                <GridColumn width={6} mobile={12}>
                    <Form onSubmit={callLogin} error={!!response.error}>
                        <FormField >
                            <label>Email</label>
                            <Input
                                type='text' 
                                placeholder="Email" 
                                onChange={(e) => setEmail(e.target.value)} 
                                icon={emailIsValid != undefined && !emailIsValid ? ErrorIcon : undefined} 
                                error={emailIsValid != undefined && !emailIsValid} 
                                fluid/>
                        </FormField>
                        <FormField>
                            <label>Password</label>
                            <Input 
                            type='password' 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            fluid 
                            />
                        </FormField>
                        <Button disabled={emailIsValid === false || password.length === 0} className="submit-btn" color="teal" type='submit' fluid>Submit</Button>
                        {response.error ?
                            <Message
                                error
                                header='Something went wrong!'
                                content={response.error}
                            />
                            :
                            null
                        }
                    </Form>
                </GridColumn>
            </GridRow>
            <GridRow>
            </GridRow>
        </Grid>
    )
}

export default LoginPage