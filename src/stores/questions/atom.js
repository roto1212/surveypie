import { atom } from "recoil";

const questionsState = atom({
  key: 'questionsState',
  default: [
    { title: "질문 1입니다.", desc: "설명 1입니다.", type: "text", requires: true, options: { placeholder: "입력해주세요." } },
    { title: "질문 2입니다.", desc: "설명 2입니다.", type: "textarea", requires: true, options: { placeholder: "입력해주세요." } },
    { title: "질문 3입니다.", desc: "설명 3입니다.", type: "select", requires: true, options: { items: ["답변1", "답변2", "답변3", "답변4", "답변5"] } },
  ],
});

export default questionsState;

