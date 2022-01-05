import React, { memo } from "react";
// コンポーネントをmemoで囲ってあげるとpropsの書き換えが起きる時だけレンダリングされるようになり、親要素と合わせてレンダリングされなくなる。
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされました。");

  const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("...");
  // });
  return (
    <>
      {open ? (
        // これは三項演算子を使って、 openがTrueならdivタグをレンダリングし、
        //　falseならnullを返す（＝何も表示しない）という処理を行っている
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
