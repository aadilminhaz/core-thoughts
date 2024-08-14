import './WriterEntry.css';

const WriterEntry:React.FC = ()=> {
    return (
        <div className="blogs">
            <div className="blogs-title">
                <h1>Write your own blog</h1>
                <p>Become a part of this tech community and share your core thoughts</p>
            </div>
            <div className="blogs-container">
                <div className="writer-button">Start Writing</div>
            </div>
        </div>

    );
};

export default WriterEntry;