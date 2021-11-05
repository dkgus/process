import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

function RegisterPage(props){
    const dispatch = useDispatch();

    const [Name,SetName] =  useState("");
    const [Password,SetPassword] =  useState("");
    const [PasswordCheck,SetPasswordCheck] =  useState("");
    const [Affiliate,SetAffiliate] =  useState("");



    const onUsernameHandler = (e)=> {
        SetName(e.currentTarget.value);
    };

    const onPasswordeHandler = (e)=> {
        SetPassword(e.currentTarget.value);
    };

    const onPasswordCheckHandler = (e)=> {
        SetPasswordCheck(e.currentTarget.value);
    };

    const onAffiliateHandler = (e)=> {
        SetAffiliate(e.currentTarget.value);
    };

    const onSubmitHandler = (e)=> {
        e.preventDefault();

       
        
        let body = {
            name : Name,
            password: Password,
            passwordCheck: PasswordCheck,
            affiliate: Affiliate
        };

        if (Password === PasswordCheck) {
            dispatch(registerUser(body)).then((res) => {
              console.log(res);
              alert("가입이 정상적으로 완료되었습니다");
              props.history.push("/login");
            });
          } else {
            alert("비밀번호가 일치하지 않습니다.");
          }
        };

   
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Name</label>
                <input type="name" value={Name} onChange={onUsernameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordeHandler} />

                <label>Confirm Password</label>
                <input type="passwordcheck" value={PasswordCheck} onChange={onPasswordCheckHandler} />

                <label></label>
                <input type="affiliate" value={Affiliate} onChange={onAffiliateHandler} />

                <br />
                <button type="submit">
                    회원 가입
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)