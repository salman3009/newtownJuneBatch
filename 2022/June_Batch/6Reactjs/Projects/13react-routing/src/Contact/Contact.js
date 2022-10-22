
import './Contact.css';

const Contact = () => {
    return (<div className="container">
        <div className="row">
            <div className="col-2">

            </div>
            <div className="col-8">
                <form>
                    <div class="form-group">
                        <label>Feedback Form</label>
                        <textarea class="form-control" name="feedback" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Feedback</button>
                </form>
            </div>
            <div className="col-2">

            </div>
        </div>

    </div>)
}

export default Contact;