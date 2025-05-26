import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

import { useAuth } from "../../store/AuthContext";
import { dashboard } from "../../routes";
import { postRequest } from "../../http/httpService";

import "./signup.scss";

const Signup = () => {
  const [loading, setLoading] = useState();
  const [showOther, setShowOther] = useState(false);
  const [showStateOther, setShowStateOther] = useState(false);
  const [userType, setUserType] = useState<string | undefined>(undefined);
  const [onboarded, setOnboarded] = useState(false);
  const [formState, setFormState] = useState({
    level: "BEGINNER",
    age_group: "ZERO_TO_EIGHTEEN",
    learning_interest: "YES",
    tutor_preference: "MALE",
    devotion_time: "FIVE_MINUTES",
    referral_source: "YOUTUBE",
    referral_source_alt: undefined,
    language_id: "1",
    address: undefined,
    date_of_birth: undefined,
    gender: "MALE",
    contact: undefined,
    state_of_origin: "ABIA",
    state_of_origin_alt: undefined
  })

  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (auth?.user !== undefined) {
      history.push(dashboard.path);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!onboarded) {
      setOnboarded(true);
    }
  }

  const handleSelectUserType = (usertype: string | undefined) => {
    setTimeout(() => {
      setUserType(usertype)
    }, 250)
  }

  const SelectUserTypeForm = () => (
    <div id="signup" className="d-flex flex-column p-4">
      <h2>Sign up as a</h2>
      <div id="usertype" className="d-flex flex-column mt-3">
        <div className="usertype-select mb-3 d-flex flex-column" onClick={() => handleSelectUserType("STUDENT")}>
          <span>Learner</span>
          <span>You want to learn Igbo</span>
        </div>

        <div className="usertype-select mb-3 d-flex flex-column" onClick={() => handleSelectUserType("PARENT")}>
          <span>Parent</span>
          <span>You want to monitor your children as they learn Igbo</span>
        </div>

        <div className="usertype-select d-flex flex-column" onClick={() => handleSelectUserType("TUTOR")}>
          <span>Tutor</span>
          <span>You want to teach Igbo</span>
        </div>
      </div>
    </div>
  )

  const OnboardingForm = () => (
    <div id="signup" className="d-flex flex-column p-4">
      <h2>Let us match you</h2>
      <form className="d-flex flex-column align-items-center m-3" onSubmit={handleSubmit}>
        {userType === "STUDENT" && (
          <>
            <Form.Label className="align-self-start">Your language level</Form.Label>
            <Form.Control as="select" className="mb-2" placeholder="Level" name="level" disabled={loading} required>
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCED">Advanced</option>
            </Form.Control>
            <Form.Label className="align-self-start">How old are you?</Form.Label>
            <Form.Control as="select" className="mb-2" placeholder="Age group" name="age_group" disabled={loading} required>
              <option value="ZERO_TO_EIGHTEEN">0 - 18 years</option>
              <option value="EIGHTEEN_TO_TWENTYFOUR">19 - 24 years</option>
              <option value="TWENTYFIVE_TO_THIRTYTWO">25 - 32 years</option>
              <option value="THIRTYTWO_TO_FORTY">33 - 40 years</option>
              <option value="FORTY_PLUS">40+ years</option>
            </Form.Control>
          </>
        )}

        {userType === "PARENT" && (
          <>
            <Form.Label className="align-self-start">Are they interested in learning?</Form.Label>
            <Form.Control as="select" className="mb-2" placeholder="Learning Interest" name="learning_interest" disabled={loading} required>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
              <option value="NOT_SURE">Unsure</option>
            </Form.Control>
          </>
        )}

        {(userType === "STUDENT" || userType === "PARENT") && (
          <>
            <Form.Label className="align-self-start">Tutor Preference</Form.Label>
            <Form.Control as="select" className="mb-2" placeholder="Tutor Preference" name="tutor_preference" disabled={loading} required>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="EITHER">Either</option>
            </Form.Control>
            <Form.Label className="align-self-start">Weekly Time Dedication?</Form.Label>
            <Form.Control as="select" className="mb-2" placeholder="Devotion Time" name="devotion_time" disabled={loading} required>
              <option value="FIVE_MINUTES">5 minutes</option>
              <option value="FIFTEEN_MINUTES">15 minutes</option>
              <option value="THIRTY_PLUS_MINUTES">30+ minutes</option>
            </Form.Control>
            <Form.Label className="align-self-start">How did you hear about us?</Form.Label>
            <Form.Control as="select" className="mb-2" placeholder="Referral Source" name="referral_source" value={formState.referral_source} onChange={(e: any) => { setFormState({ ...formState, referral_source: e.target.value }); setShowOther(e.target.value === "OTHERS")}} disabled={loading} required>
              <option value="YOUTUBE">YouTube</option>
              <option value="INSTAGRAM">Instagram</option>
              <option value="FACEBOOK">Facebook</option>
              <option value="GOOGLE_SEARCH">Google Search</option>
              <option value="APPSTORE">App Store</option>
              <option value="OTHERS">Other</option>
            </Form.Control>
            {showOther && (
              <>
                <Form.Label className="align-self-start">Please specify</Form.Label>
                <Form.Control type="text" className="mb-2" placeholder="Please specify" name="referral_source_alt" disabled={loading} required />
              </>
            )}
          </>
        )}

        <Form.Label className="align-self-start">Select language</Form.Label>
        <Form.Control as="select" className="mb-2" placeholder="Language" name="language_id" disabled={loading} required>
          <option value="1">Igbo</option>
        </Form.Control>

        {userType === "TUTOR" && (
          <>
            <Form.Label className="align-self-start">Address</Form.Label>
            <Form.Control type="text" className="mb-2" placeholder="Address" name="address" disabled={loading} required />
            <Form.Label className="align-self-start">Date of Birth</Form.Label>
            <Form.Control type="text" className="mb-2" placeholder="Birthday in MM/DD/YYYY" name="date_of_birth" disabled={loading} required />
            <Form.Label className="align-self-start">Gender</Form.Label>
            <Form.Control as="select" className="mb-2" placeholder="Gender" name="gender" disabled={loading} required>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </Form.Control>
            <Form.Label className="align-self-start">Phone</Form.Label>
            <Form.Control type="text" className="mb-2" placeholder="Phone with country code" name="contact" disabled={loading} required />
            <Form.Label className="align-self-start">State of origin</Form.Label>
            <Form.Control as="select" className="mb-2" placeholder="State of origin" name="state_of_origin" value={formState.state_of_origin} disabled={loading} onChange={(e: any) => { setFormState({ ...formState, state_of_origin: e.target.value }); setShowStateOther(e.target.value === "Other")}} required>
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
              <>
                <Form.Label className="align-self-start">Please specify</Form.Label>
                <Form.Control type="text" className="mb-2" placeholder="Please specify" name="state_of_origin_alt" disabled={loading} required />
              </>
            )}
          </>
        )}
          <div className="m-3 d-flex align-items-center">
            <Button variant="secondary" className="mr-2 pt-3 pl-4 pr-4 pb-3" onClick={() => handleSelectUserType(undefined)}>Back</Button>
            <Button variant="primary" className="pt-3 pl-4 pr-4 pb-3" type="submit">Next</Button>
          </div>
      </form>
    </div>
  )

  const SignupForm = () => {
    return (
      <div id="signup" className="d-flex flex-column p-4">
        <h2>All Set to Sign Up</h2>
        <form className="d-flex flex-column align-items-center m-3" onSubmit={handleSubmit}>
          <Form.Control className="mb-2" type="text" placeholder="First Name" name="first_name" disabled={loading} required />
          <Form.Control className="mb-2" type="text" placeholder="Last Name" name="last_name" disabled={loading} required />
          <Form.Control className="mb-2" type="email" placeholder="Email" name="email" disabled={loading} required />
          <Form.Control className="mb-2" type="password" placeholder="Password" name="password" disabled={loading} required />
          <Form.Control type="password" placeholder="Confirm Password" name="confirm_password" disabled={loading} required />
          <div className="m-3">
            <Button variant="primary" type="submit">Sign Up</Button>
          </div>
        </form>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    )
  }

  if (userType === undefined) {
    return <SelectUserTypeForm />
  } else if (!onboarded) {
    return <OnboardingForm />
  }

  return <SignupForm />;
};

export default Signup;