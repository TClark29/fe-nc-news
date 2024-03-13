
function LoadingMessage(props){
    const element = props.element


    return <>
    <p className="loading-message">Loading {element}...</p>
    </>
}

export default LoadingMessage