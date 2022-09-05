import axios from "axios";

const BASE_URL = "http://localhost:8080/";

// BASE URL
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// SIGN UP LINK
export const SIGNUP = "users/signup/";

// UPDATE
export const UPDATE = "users/editAccountDetails";

// LOGIN
export const LOGIN = "users/login";

// EDIT ACCOUNT
export const EDITACCOUNT = "users/editAccountDetails";

export const GETUID = "users/loginID";

// GET ALL SCHOOLS
export const GETALLSCHOOLS = "schools/general";

// GET SCHOOL BY NAME
export const GETSCHOOL = (name) => {
  return "schools/general?school_name=" + name;
};

//ADD SHORTLISTED
export const ADDSHORTLIST = "shortlist/";

// GET SHORTLISTED
export const GETSHORTLISTED = (id) => "shortlist/" + id + "/viewShortlist";

// DELETE SHORTLISTED
export const DELETESHORTLISTED = (id) =>
  "shortlist/" + id + "/deleteShortlisted";

// FILTER - CCA GROUP - http://localhost:8080/schools/cca?cca_grouping_desc=PHYSICAL SPORTS
export const FilterCcaGrp = (category) =>
  "schools/cca?cca_grouping_desc=" + category;

export const FilterCcaSchool = (schoolName) =>
  "schools/cca?school_name=" + schoolName;
// FILTER - CCA NAME - http://localhost:8080/schools/cca?cca_generic_name=BASKETBALL
export const FilterCcaName = (name) => "schools/cca?cca_generic_name=" + name;

// FILTER - SUBJECTS - http://localhost:8080/schools/subjects?subject_desc=ART
export const FilterSubject = (subj) => "schools/subjects?subject_desc=" + subj;

export const getSchoolSubject = (schoolName) =>
  "schools/subjects?school_name=" + schoolName;

// FILTER - ZoneCode - http://localhost:8080/schools/general?zone_code=NORTH
export const FilterZone = (zone) => "schools/general?zone_code=" + zone;

// FILTER - LLP Domain - http://localhost:8080/schools/programmes?llp_domain1=Community %26 Youth Leadership
export const FilterEP = (EP) => "schools/programmes?llp_domain1=" + EP;
export const getSchoolEP = (schoolName) =>
  "/schools/programmes?school_name=" + schoolName;

// SPECIAL NEEDS
export const getSpecialNeedsSchool = (schoolName) =>
  "schools/specialneeds?school_name=" + schoolName;
