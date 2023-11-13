import R3F_Walkthrough from '../360/R3F_Walkthrough'
import './ImageModal.css'

const ImageModal = ({ setIsModalOn, selectedItem }) => {
    return <div className="overlay">
        <div className="modal">
            <div className="modal-content">
                <span id="closeModal" className="close" onClick={() => setIsModalOn(false)}>&times;</span>
                <h2>Modal Title {selectedItem}</h2>
                <p>This is some modal content.</p>
                <div className='container360'>
                <R3F_Walkthrough />
                </div>
            </div>
        </div>
    </div>
}
export { ImageModal }