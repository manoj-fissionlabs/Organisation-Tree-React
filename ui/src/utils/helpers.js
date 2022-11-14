import { candidatesData } from "./data";

export const getCandidateName = _candidateId => {
    const filterCandidate = candidatesData.filter(_candidate => _candidate.candidateId === _candidateId);
    // console.log("filterCandidate --> ", filterCandidate);
    if (filterCandidate) {
        // console.log("Candidate Exists");
        return filterCandidate[0]['name'] + ' ' + filterCandidate[0]['surname'];
    } else {
        // console.log("Candidate doen't Exist");
        return '--NA--';
    }
}

export const getCandidateAvatar = _candidateId => {
    const filterCandidate = candidatesData.filter(_candidate => _candidate.candidateId === _candidateId);
    // console.log("filterCandidate --> ", filterCandidate);
    if (filterCandidate) {
        // console.log("Candidate Exists");
        return filterCandidate[0]['img'];
    } else {
        // console.log("Candidate doen't Exist");
        return '--NA--';
    }
}