import { Button, Container, Form, FormField, Grid, GridColumn, GridRow, Input } from "semantic-ui-react"
import { ReactComponent as Calamity } from '../../assets/calamity.svg'



type Props = {}

const LoginPage = (props: Props) => {

    return (
        <Grid centered>
            <GridRow columns={1}>
                <GridColumn>
                    <Calamity className='App-logo' />
                </GridColumn>
            </GridRow>
            <GridRow columns={12}>
                <GridColumn width={10}>
                    <Form>
                        <FormField>
                            <label>Email</label>
                            <Input type='text' placeholder="Email" fluid />
                        </FormField>
                        <FormField>
                            <label>Password</label>
                            <Input type='password' placeholder="Password" fluid />
                        </FormField>
                        <Button className="submit-btn" color="teal" type='submit' fluid>Submit</Button>
                    </Form>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}

export default LoginPage