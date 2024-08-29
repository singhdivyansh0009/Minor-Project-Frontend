import { useState, React } from 'react';
import styles from './Kyc.module.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Kyc = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        barAssociationNumber: '',
        aadharNumber: '',
        phoneNumber: '',
        DOB: '',
        aadharCard: null,
        barAssociationCard: null,
        gender: '',
        city: ''
    });

    const [formError, setformError] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setProfileData({
                ...profileData,
                [name]: files[0]
            });
        } else {
            setProfileData({
                ...profileData,
                [name]: value
            });
        }
        console.log(profileData);
    }

    const isValidDateDDMMYYYY = (input) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!regex.test(input))
            return false;

        const [day, month, year] = input.split('/');
        if (day < 1 || day > 31)
            return false;

        if (month < 1 || month > 12)
            return false;

        if (year.length !== 4)
            return false;

        return true;
    }

    const checkForValidity = () => {
        let errors = {
            barAssociationNumberError: '',
            aadharNumberError: '',
            phoneNumberError: '',
            DOBError: '',
            aadharCardError: '',
            genderError: '',
            cityError: ''
        };

        if (profileData.barAssociationNumber.length !== 10)
            errors.barAssociationNumberError = 'enter valid Id number';

        if (profileData.aadharNumber.length !== 16)
            errors.aadharNumberError = 'enter valid aadhar number';

        if (profileData.phoneNumber.length !== 10)
            errors.phoneNumberError = 'enter valid phone number';

        if (!isValidDateDDMMYYYY(profileData.DOB))
            errors.DOBError = 'enter valid DOB';

        if (profileData.city === '' || profileData.gender === '')
            errors.cityError = 'enter city and gender';

        if (profileData.aadharCard === null || profileData.barAssociationCard === null)
            errors.aadharCardError = 'Upload the document';

        setformError(errors);
        return Object.values(errors).every((error) => error === '');
    }

    const submit = () => {
        let isValid = checkForValidity();
        if (isValid) {
            console.log('Data sending to server',profileData);
           axios.post("http://localhost:8000/api/v1/",profileData)
                .then((res)=>{alert(res.data.message)})
                .then(navigate('/underReview'))
                .catch((error) => console.error('Error registering:', error));
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <p>1 Step KYC</p>
                </div>
                <div className={styles.Contact}>
                    <div className={styles.documentNo}>
                        <input
                            className={styles.Input}
                            type="text"
                            name="barAssociationNumber"
                            value={profileData.barAssociationNumber}
                            onChange={handleChange}
                            placeholder='enter bar association No.'
                            required
                        />
                        <input
                            className={styles.Input}
                            type="text"
                            name="aadharNumber"
                            value={profileData.aadharNumber}
                            onChange={handleChange}
                            placeholder='enter aadhar number'
                            required
                        />
                    </div>
                    <p className={styles.error}>{formError.barAssociationNumberError || formError.aadharNumberError}</p>
                    <div className={styles.other}>
                        <select className={styles.Choose}
                            name="city"
                            onChange={handleChange}
                            value={profileData.city}
                            required
                        >
                            <option value="">Select City</option>
                            <option value="Jabalpur">Jabalpur</option>
                            <option value="Bhopal">Bhopal</option>
                        </select>
                        <select className={styles.Choose}
                            name="gender"
                            onChange={handleChange}
                            value={profileData.gender}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <p className={styles.error}>{formError.genderError || formError.cityError}</p>
                    <div className={styles.other}>
                        <input
                            className={styles.Input}
                            type="text"
                            name="DOB"
                            value={profileData.DOB}
                            onChange={handleChange}
                            placeholder='enter date of birth(DD/MM/YYYY)'
                            required
                        />
                        <input
                            className={styles.Input}
                            type="text"
                            name="phoneNumber"
                            value={profileData.phoneNumber}
                            onChange={handleChange}
                            placeholder='enter mobile number'
                            required
                        />
                    </div>
                    <p className={styles.error}>{formError.DOBError || formError.phoneNumberError}</p>
                    <div className={styles.other}>
                        <label htmlFor="aadhar" className={styles.fileInput}>
                            <span>Upload Aadhar</span>
                            <input type="file" id="aadhar" name="aadharCard" onChange={handleChange} accept='image/*' />
                        </label>
                        <label htmlFor="barAsscociation" className={styles.fileInput}>
                            <span>Upload BarAssociation card</span>
                            <input type="file" id="barAsscociation" name="barAssociationCard" onChange={handleChange} accept='image/*' />
                        </label>
                    </div>
                    <p className={styles.error}>{formError.aadharCardError || formError.barAssociationCardError}</p>
                </div>
                <button className={styles.btn} onClick={submit}>Submit</button>
            </div>
        </div>
    );
}

export default Kyc;
