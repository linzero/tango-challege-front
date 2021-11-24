import { useDispatch, useSelector } from "react-redux";
import { getNumber, setNumber } from "./actions/fiboActions";
import { fiboState } from "./reducers/fiboReducer";
import { uiState } from "./reducers/uiReducer";

interface storeState {
    fibo:fiboState
    ui:uiState
}

const FiboApp = () => {

    const dispatch = useDispatch();
    const { fibo:{response}, ui:{loading}, fibo:{num} } = useSelector( (state:storeState) => state );

    const handleInputChange = (e:any) => {
        dispatch( setNumber( e.target.value ) )
    }

    const handleButtonClic = () => {
        dispatch( getNumber( num || 0 ) )
    }

    return (
        <>
            <div className="main-content d-flex align-items-center justify-content-center">
                <div className="container text-center">
                    <h1 className="mb-3">Calculate Fibonacci!</h1>
                    <form className="main-form row m-0 m-auto mb-3">
                        <div className="col-6">
                            <input className="form-control" onChange={handleInputChange} value={num} />
                        </div>
                        <div className="col-6">
                        {
                            (!loading) && <button className="btn btn-primary w-100" onClick={handleButtonClic}>Calculate</button>
                        }
                        {
                            (loading) && <button className="btn btn-primary w-100" disabled>Calculando...</button>
                        }
                        </div>
                    </form>

                    {
                        (!( isNaN(parseInt(response?.toString() || '')) )) && 
                        <div>
                            <p><span className="middle"><b>Fibonacci Result:</b></span> <span id="content-response" className="fs-4 middle">{ response }</span></p>
                        </div>
                    }
                </div>
            </div>
            
        </>
    )
}

FiboApp.propTypes = {

}

export default FiboApp
