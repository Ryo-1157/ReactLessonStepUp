import { useCallback, useState, useMemo } from "react";
import "./styles.css";
import { ChildArea } from "./components/index";

export default function App() {
  console.log("Appがレンダリングされました。");
  // const [count, setCount] = useState(0);
  // const countUp = () => {
  //   setCount((prevState) => prevState + 1);
  // };
  // const countDown = () => {
  //   setCount((prevState) => prevState - 1);
  // };
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  /**
   * useCallbackは関数のmemo化のこと。
   * memo化はpropsの書き換えが起こらない限り再レンダリングが起こらないようにすることをさす。
   * しかしアロー関数の場合、毎回新しい関数が作られpropsとして渡される判定になってしまう。
   * そこでアロー関数をuseCallbackで囲むことで、一番初めのレンダリングでしか読み込まれないようにする処理ができる。
   */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const onClickOpen = () => setOpen(!open);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea
        open={open}
        // もしもindexのような値を入れたいもののをuseCallbackしたいなら、propsを渡す時に書けばいい。ほぼそんな時は来ないけど。
        onClickClose={useCallback(() => onClickClose(), [onClickClose])}
      ></ChildArea>
    </div>
  );
}
