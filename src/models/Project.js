import firebase from './Firebase';

const db = firebase.firestore();

class Project {

    getProjects = async () => {
        const projects = await db.collection("main").doc("projects").get().then((response) => {
            return response.data()["allProjects"];
        }).catch((e) => {
            console.log(e);
            return null;
        });
        return projects;
    }

    getProjectData = async (docId) => {
        const data = await db.collection("projects").doc(docId).get().then((response) => {
            return response.data();
        }).catch((e) => {
            console.log(e);
            return null;
        });
        return data;
    }

    getMarkdownUrl = async (docId) => {
        const data = await db.collection("markdowns").doc(docId).get().then((response) => {
            return response.data()["url"];
        }).catch((e) => {
            console.log(e);
            return null;
        });
        return data;
    }
    
}

export default Project;