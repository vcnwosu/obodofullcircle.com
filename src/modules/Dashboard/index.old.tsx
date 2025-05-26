import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { exchangeProgram, login } from '../../routes';
import CustomModal from '../../shared/components/Modal';
import { usePlan } from '../../store/PlanContext';

const Dashboard = () => {
  const auth = useAuth();
  const history = useHistory();
  const plan = usePlan();

  const [discountCode, setDiscoutCode] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const [showStateOther, setShowStateOther] = useState(false);

  useEffect(() => {
    if (auth?.user === undefined) {
      history.push(login.path);
    }
  });

  let expiry: Date = new Date();

  if (auth?.user?.student?.plan_expiry) {
    expiry = new Date(auth?.user?.student.plan_expiry);
  }

  const modalBody = () => {
    return (
      <div className="modal-box d-flex mt-2 flex-column">
        <Form.Control type="text" placeholder="Enter Discount Code" onChange={(e) => setDiscoutCode(e.target.value)} />
        <div className="mt-3">
          <Button variant="primary" onClick={routeExchangeProgramPage}>Apply</Button>
          <Button variant="secondary" className="ml-3" onClick={routeExchangeProgramPage}>No Discount</Button>
        </div>
      </div>
    );
  };

  const handleClose = () => {
    setShowModal(false);
  }

  const routeExchangeProgramPage = () => {
    plan?.setDiscount(discountCode);
    history.push(`${exchangeProgram.path}#plans`);
  }

  const OnboardingForm = () => {
    return (
      <form className="d-flex flex-column align-items-center m-5" onSubmit={handleSubmit}>
        {auth?.user?.user_type === "STUDENT" && (
          <>
            <Form.Control as="select" placeholder="Level" name="level" disabled={loading} required>
              <option value="">Select Level</option>
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCED">Advanced</option>
            </Form.Control>
            <Form.Control as="select" placeholder="Age group" name="age_group" disabled={loading} required>
              <option value="">How old are you?</option>
              <option value="ZERO_TO_EIGHTEEN">0 - 18 years</option>
              <option value="EIGHTEEN_TO_TWENTYFOUR">19 - 24 years</option>
              <option value="TWENTYFIVE_TO_THIRTYTWO">25 - 32 years</option>
              <option value="THIRTYTWO_TO_FORTY">33 - 40 years</option>
              <option value="FORTY_PLUS">40+ years</option>
            </Form.Control>
          </>
        )}

        {auth?.user?.user_type === "PARENT" && (
          <Form.Control as="select" placeholder="Learning Interest" name="learning_interest" disabled={loading} required>
            <option value="">Are they interested in learning?</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
            <option value="NOT_SURE">Unsure</option>
          </Form.Control>
        )}

        {auth?.user?.user_type === "STUDENT" || auth?.user?.user_type === "PARENT" && (
          <>
            <Form.Control as="select" placeholder="Tutor Preference" name="tutor_preference" disabled={loading} required>
              <option value="">Select Tutor Preference</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="EITHER">Either</option>
            </Form.Control>
            <Form.Control as="select" placeholder="Devotion Time" name="devotion_time" disabled={loading} required>
              <option value="">How much time are you willing to dedicate each week?</option>
              <option value="FIVE_MINUTES">5 minutes</option>
              <option value="FIFTEEN_MINUTES">15 minutes</option>
              <option value="THIRTY_PLUS_MINUTES">30+ minutes</option>
            </Form.Control>
            <Form.Control as="select" placeholder="Referral Source" name="referral_source" onChange={(e: any) => setShowOther(e.target.value === "OTHERS")} disabled={loading} required>
              <option value="">How did you hear about us?</option>
              <option value="YOUTUBE">YouTube</option>
              <option value="INSTAGRAM">Instagram</option>
              <option value="FACEBOOK">Facebook</option>
              <option value="GOOGLE_SEARCH">Google Search</option>
              <option value="APPSTORE">App Store</option>
              <option value="OTHERS">Other</option>
            </Form.Control>
            {showOther && (
              <Form.Control type="text" placeholder="Please specify" name="referral_source_alt" disabled={loading} required />
            )}
          </>
        )}

        <Form.Control as="select" placeholder="Language" name="language_id" disabled={loading} required>
          <option value="">Select language</option>
          <option value="1">Igbo</option>
        </Form.Control>

        {auth?.user?.user_type === "TUTOR" && (
          <>
            <Form.Control type="text" placeholder="Address" name="address" disabled={loading} required />
            <Form.Control type="text" placeholder="Birthday in MM/DD/YYYY" name="date_of_birth" disabled={loading} required />
            <Form.Control as="select" placeholder="Gender" name="gender" disabled={loading} required>
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </Form.Control>
            <Form.Control type="text" placeholder="Phone with country code" name="contact" disabled={loading} required />
            <Form.Control as="select" placeholder="State of origin" name="state_of_origin" disabled={loading} onChange={(e: any) => setShowStateOther(e.target.value === "Other")} required>
              <option value="">Select your State of origin</option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa_Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross_River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="FCT_Abuja">FCT Abuja</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
              <option value="Other">Other</option>
            </Form.Control>
            {showStateOther && (
              <Form.Control type="text" placeholder="Please specify" name="state_of_origin_alt" disabled={loading} required />
            )}
          </>
        )}
      </form>
    )
  };

  const handleSubmit = (e: React.FormEvent) => {

  }

  const showOnboarding = (auth?.user?.user_type === "STUDENT" && !auth?.user?.student)
    || (auth?.user?.user_type === "PARENT" && !auth?.user?.parent)
    || (auth?.user?.user_type === "TUTOR" && !auth?.user?.tutor)

  return (
    <div className="m-5">
      <h1>Welcome, {auth?.user?.first_name} {auth?.user?.last_name}</h1>
      <h5>{auth?.user?.user_type}</h5>
      <br/>
      <br/>
      {showOnboarding && <OnboardingForm />}
      {auth?.user?.student && (
        <>
          <p>You are currently subscribed to the <b>{auth?.user?.student.plan}</b> plan which is set to expire or renew on {expiry.toDateString()}.</p>
          <div>
            <Button variant="primary" onClick={() => setShowModal(true)}>Modify Plan</Button>
            <Button variant="danger" className="ml-3">Cancel Plan</Button>
          </div>
        </>
      )}
      <CustomModal
        show={showModal}
        handleClose={handleClose}
        heading="Do you have a discount code?"
        body={modalBody()}
      />
    </div>
  );
};

export default Dashboard;