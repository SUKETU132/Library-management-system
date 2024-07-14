import Inputfield from '../Inputfield';
import Buttons from "../Button";

export default function Login() {
    return (
        <>
            <div class="Login-body">
                <div class="Login-card">
                    <div>
                        <h3 class="heading">Email</h3>
                        <Inputfield class="inputfield" name="email" type="mail" label="Enter email-id" />
                    </div>
                    <div >
                        <h3 class="heading">Password</h3>
                        <Inputfield class="inputfield" name="password" type="password" label="Enter password" />
                    </div>
                    <Buttons name="Login" />
                </div>
            </div>
        </>
    )
}