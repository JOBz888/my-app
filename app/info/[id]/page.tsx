//const infoParamPage = async ({params} :{ params: Promise<{ id : string }> }) => {
const infoParamPage = async ({params}) => {
    const { id } = await params;
  return (
    <>
    <p>infoParamPage : {id}</p>
    </>
  );
};
export default infoParamPage