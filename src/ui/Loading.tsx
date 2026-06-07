import { ThreeDots } from "react-loader-spinner";

interface LoadingProps {
  width?: string | number;
  height?: string | number;
}

function Loading({ width = "75", height = "40" }: LoadingProps) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}

export default Loading;
