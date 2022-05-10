import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    All employeers
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    For promotion
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    Employeers which earn more then 1000$
            </button>
        </div>
    )
}

export default AppFilter;