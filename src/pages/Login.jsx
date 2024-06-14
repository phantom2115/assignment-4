import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../lib/api/auth";

// const Button = styled(Link)``;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
const Form = styled.div`
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

function Login({ setUser }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { userId, nickname, avartar } = await login({
      id: id,
      password: password,
    });
    alert("로그인이 완료되었습니다!");
    setUser({ userId, nickname, avartar });
    navigate("/");
  };
  return (
    <Container>
      <Form>
        <div>로그인</div>
        <Input
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="아이디"
        ></Input>
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀번호"
        ></Input>
        <ButtonBox>
          <Button onClick={handleLogin}>로그인</Button>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </Button>
        </ButtonBox>
      </Form>
    </Container>
  );
}

export default Login;
