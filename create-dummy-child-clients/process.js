import {faker} from "../init";
import {json} from './payload'
import {postRequest} from '../helper'


let userName = process.env.USER_NAME;
let password = process.env.PASSWORD;
let credential = `${userName}:${password}`

init(1, credential);

function init(count, credential) {

    for (let i = 0; i < count; i++) {
        let motherBaseEntityId = faker.random.uuid();
        let childBaseEntityId = faker.random.uuid();
        let birthReg = faker.random.uuid();
        let womanReg = faker.random.uuid();
        let motherZeirId = `${faker.finance.account()}-${(i + 1)}`;
        let childZeirId = `${faker.finance.account()}-${(i + 2)}`;
        let newJson = {};
        newJson.clients = json.clients
            .replace(/{mother baseEntityId}/g, motherBaseEntityId)
            .replace(/{child baseEntityId}/g, childBaseEntityId)
            .replace(/{child zeirId}/g, (childZeirId))
            .replace(/{m_zeirId}/g, (motherZeirId))
            .replace(/{first_name}/g, faker.name.firstName())
            .replace(/{last_name}/g, faker.name.lastName())
            .replace(/{mother_first_name}/g, faker.name.firstName())
            .replace(/{mother_last_name}/g, faker.name.lastName())
            .replace(/{date_created}/g, new Date().toISOString());

        newJson.events = json.events
            .replace(/{mother baseEntityId}/g, motherBaseEntityId)
            .replace(/{child baseEntityId}/g, childBaseEntityId)
            .replace(/{birth Event formSubmissionId}/g, birthReg)
            .replace(/{woman Reg formSubmissionId}/g, womanReg)
            .replace(/{team}/g, process.env.TEAM)
            .replace(/{teamId}/g, process.env.TEAM_ID)
            .replace(/{locationId}/g, process.env.LOCATION_ID)
            .replace(/{providerId}/g, process.env.PROVIDER_ID)
            .replace(/{lastInteractedWith}/g, new Date().getTime())
            .replace(/{date_created}/g, new Date().toISOString());

        postRequest(newJson, Buffer.from(credential).toString('base64'), process.env.URL) //Comment if you dont have api to send the payload
    }
}
