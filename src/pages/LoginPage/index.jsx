import styled from "styled-components";
import logo from "./assets/Logo.svg";
import cat from "./assets/cat.svg";
import face from "./assets/face_dog.jpg";
import patas from "./assets/patas de cachorro.svg";
import { useState } from "react";
import "boxicons";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {
  const [hide, setHide] = useState(false);
  const isHide = () => setHide(!hide);
  const [remember, setRemember] = useState(false);
  const isRemember = () => setRemember(!remember);
  const { form, handleForm, clearForm } = useForm({
    username: "",
    password: "",
  });

  const enviaForm = (e) => {
    e.preventDefault();
    console.log(form);
    clearForm();
  };

  return (
    <>
      <LoginContainer>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Seu amiguinho merece mais atenção</h3>

          <img src={cat} alt="cat" className="cat" />
        </div>
        <div className="login">
          <img src={patas} alt="patas" className="cima" />
          <img src={patas} alt="patas" className="baixo" />

          <img src={face} alt="face-dog" className="dog" />
          <form onSubmit={enviaForm}>
            <div className="social_media">
              <box-icon type="logo" name="google"></box-icon>
              <box-icon type="logo" name="facebook-square"></box-icon>
              <box-icon name="instagram" type="logo"></box-icon>
            </div>
            <label htmlFor="username">
              <box-icon type="solid" name="user"></box-icon>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleForm}
                placeholder="Digite o @ do seu usuario"
                required
              />
            </label>
            <label htmlFor="senha">
              <box-icon name="lock-alt" color="#000000"></box-icon>
              <input
                name="password"
                value={form.password}
                onChange={handleForm}
                type={hide ? "text" : "password"}
                placeholder="Digite sua senha"
                required
              />
              <span className="olho" onClick={isHide}>
                <box-icon name={hide ? "hide" : "show"}></box-icon>
              </span>
            </label>
            <div className="options">
              <div className="lembrar">
                {remember && (
                  <box-icon name="star" type="solid" color="#ffea00"></box-icon>
                )}
                {!remember && <box-icon name="star" color="#ffffff"></box-icon>}
                <span onClick={isRemember}>Remember-me?</span>
              </div>
              <span>Forgot Password?</span>
            </div>

            <div className="options">
              <h4>Novo por aqui?</h4>
              <span className="cad">Cadastre-se</span>
            </div>

            <button>Login</button>
          </form>
        </div>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;

  & .logo {
    width: 40%;
    background-color: var(--midnight-mutt);
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    align-items: center;
    overflow: hidden;
    transition-duration: 400ms;

    & img {
      display: block;
      width: 100%;
      height: 50%;
      object-fit: contain;
      transition-duration: 400ms;
    }

    & h3 {
      font-size: 26px;
      color: white;
      transition-duration: 400ms;
    }

    & .cat {
      width: 150px;
      height: 150px;
      position: absolute;
      bottom: 0;
      right: 50px;
      transition-duration: 400ms;
    }
  }

  & .login {
    flex: 1;
    height: 100%;
    background-color: var(--mermaid-green);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition-duration: 400ms;
    & .cima {
      position: absolute;
      width: 250px;
      height: 230px;
      left: -70px;
      top: -10px;
      object-fit: contain;
      transition-duration: 400ms;
    }
    & .baixo {
      position: absolute;
      width: 250px;
      height: 230px;
      right: -70px;
      rotate: 164deg;
      bottom: 0px;
      object-fit: contain;
      transition-duration: 400ms;
    }

    & .dog {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      border: 14px solid var(--tiger-orange);
      z-index: 2;
      transition-duration: 400ms;
    }

    & form {
      width: 500px;
      display: flex;
      align-items: center;
      flex-direction: column;
      transition-duration: 400ms;

      & .social_media {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 45px 0;
        transition-duration: 400ms;

        & box-icon {
          width: 60px;
          height: 60px;
          cursor: pointer;
          transition-duration: 400ms;
            &:active{
                scale: .89;
            }
        }
      }

      & label {
        width: 100%;
        display: flex;
        align-items: center;
        height: 40px;
        margin: 5px 0;
        position: relative;
        transition-duration: 400ms;
        & box-icon {
          width: 40px;
          height: 40px;
          background-color: white;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          transition-duration: 400ms;
        }
        & input {
          flex: 1;
          height: 100%;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          border: none;
          padding-left: 10px;
          background-color: var(--midnight-mutt);
          color: white;
          transition-duration: 400ms;
          border: 2px solid transparent;
          &::placeholder {
            color: white;
          }

          &:focus{
            border: 2px solid var(--flamingo-furry);
          }
        }

        & .olho {
          width: 25px;
          height: 25px;
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          transition-duration: 400ms;
          & box-icon {
            background-color: transparent;
            fill: white;
            width: 25px;
            height: 25px;
            cursor: pointer;
            transition-duration: 400ms;
          }
        }
      }

      & .options {
        margin: 10px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition-duration: 400ms;
        & .lembrar {
          display: flex;
          gap: 5px;
          align-items: center;
          & box-icon {
            width: 20px;
            height: 20px;
          }
        }
        & span {
          cursor: pointer;
          color: white;
          transition-duration: 400ms;
          &:hover {
            text-decoration: underline;
          }

          &.cad {
            color: var(--midnight-mutt);
            font-weight: bold;
            font-size: 1.3rem;
          }
        }
        & h4 {
          font-size: 1rem;
          color: white;
        }
      }

      & button {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 40px;
        font-size: 26px;
        border-radius: 8px;
        cursor: pointer;
        background-color: var(--tiger-orange);
        color: white;
      }
    }
  }

  @media only screen and (max-width: 560px) {
    & .logo {
      display: none;
    }

    & .login {
      width: 100%;
      flex: none;
      padding: 0 20px;

      & .cima {
        top: 0;
        left: -30px;
        width: 130px;
        height: 130px;
      }

      & .baixo {
        width: 130px;
        height: 130px;
      }
      & .dog {
        width: 150px;
        height: 150px;
      }

      & form {
        width: 100%;
        font-size: 0.8rem;

        & .social_media {
          margin: 10px 0;
          & box-icon {
            width: 40px;
            height: 40px;
          }
        }

        & .options {
          & span {
            color: black;
            font-weight: bold;
          }
        }

        & button {
          z-index: 2;
          width: 100%;
          font-size: 22px;
        }
      }
    }
  }

  @media only screen and (min-width: 561px) and (max-width: 768px) {
    & .logo {
      & img {
        width: 80%;
      }

      & h3 {
        font-size: 16px;
        text-align: center;
      }
    }

    & .login {
      padding: 0 30px;

      & .dog {
        width: 180px;
        height: 180px;
      }
      & form {
        width: 100%;

        & .social_media {
          margin: 10px 0;
          & box-icon {
            width: 45px;
            height: 45px;
          }
        }

        & button {
          width: 100%;
          z-index: 2;
          font-size: 22px;
        }
      }
    }
  }
`;

export default LoginPage;
