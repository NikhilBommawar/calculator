 
 
 function NumericButtons({ numClicked,number,cssId}) {

                                                                                      
    return (
        <button type="button" className="btn btn-primary numButton" id={cssId}
              onClick={numClicked}
            >
              {number}
            </button>
      )
}

export default NumericButtons;