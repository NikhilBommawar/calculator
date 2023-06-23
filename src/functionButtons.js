


function FunctionButtons({funClicked , functionBtn}) {

    return <button type="button" className="btn btn-info funBtn"
             onClick={funClicked}>
                {functionBtn}
                </button>
     
 }

 export default FunctionButtons;