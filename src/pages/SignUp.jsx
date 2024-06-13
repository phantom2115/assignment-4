import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../lib/api/auth";

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
function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignUp = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4~10 글자이어야 합니다. ");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4~15 글자이어야 합니다. ");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1~10 글자이어야 합니다. ");
      return;
    }
    const respornse = await signUp({
      id: id,
      password: password,
      nickname: nickname,
    });
    console.log(respornse);
  };
  return (
    <Container>
      <Form>
        <div>회원가입</div>
        <Input
          placeholder="아이디"
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="닉네임"
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        ></Input>
        <ButtonBox>
          <Button onClick={handleSignUp}>회원가입</Button>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </Button>
        </ButtonBox>
      </Form>
    </Container>
  );
}

export default SignUp;
