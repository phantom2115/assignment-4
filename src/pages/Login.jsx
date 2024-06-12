import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
// const Button = styled(Link)``;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
const Form = styled.form`
  background-color: white;
  border-radius: 10px;
  width: 240px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 12px;
`;
const Input = styled.input`
  width: 200px;
  height: 20px;
`;
const Button = styled.button``;
const ButtonBox = styled.div`
  margin-top: 9px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 210px;
  justify-content: center;
`;

function Login() {
  const navigate = useNavigate();

  return (
    <Main>
      <Form>
        <div>로그인</div>
        <Input placeholder="아이디"></Input>
        <Input placeholder="비밀번호"></Input>
        <ButtonBox>
          <Button>로그인</Button>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </Button>
        </ButtonBox>
      </Form>
    </Main>
  );
}

export default Login;