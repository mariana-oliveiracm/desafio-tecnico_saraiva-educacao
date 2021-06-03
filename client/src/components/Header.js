
import BackButton from './BackButton';
import './Header.css';


export default function Header({ children }) {


    return (
        <div className="row header">
            <div className="col-md-3">
                <BackButton />
            </div>
            <div className="col-md-9">
                <h2 id="headerTitle">{children}</h2>
            </div>
        </div>
    );
}