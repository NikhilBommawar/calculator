function OperationButtons({opClicked,operationBtn}) {
    
      
        return <button type="button"  className="btn btn-warning opButton"
        onClick={opClicked} >
            {operationBtn}
        </button>
    }

    export default OperationButtons;