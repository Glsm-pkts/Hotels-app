type Props = {
    children? : JSX.Element | JSX.Element [] | string | undefined;
    desing? : string;
}



const Container = ({children,desing}: Props) => {
  return (
    <div className={`max-w-[1440px] mx-auto p-5 ${desing}`}>
      {children}
    </div>
  );
}

export default Container;
