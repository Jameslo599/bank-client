import CircleAnim2 from "../../images/icons/circle-anim-2";

function Loading() {
  return (
    <div className="loading">
      <div>
        <div className="spinner-container">
          <CircleAnim2 />
        </div>
        <h1>Please Wait...</h1>
      </div>
    </div>
  );
}
export default Loading;
