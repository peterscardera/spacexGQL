const { RESTDataSource } = require("apollo-datasource-rest");

class LaunchAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.spacexdata.com/v3";
    }

    async getLaunches() {
        //get helper from apollo datasource
        const response = await this.get("launches"); //receive an array of launches
        console.log(response);
        return Array.isArray(response)
            ? response.map((launch) => this.launchReducer(launch))
            : [];
    }
    launchReducer(launch) {
        return {
            id: launch.flight_number || 0,
            cursor: `${launch.launch_date_unix}`,
            site: launch.launch_site && launch.launch_site.site_name,
            mission: {
                name: launch.mission_name,
                missionPatchSmall: launch.links.mission_patch_small,
                missionPatchLarge: launch.links.mission_patch,
            },
            rocket: {
                id: launch.rocket.rocket_id,
                name: launch.rocket.rocket_name,
                type: launch.rocket.rocket_type,
            },
        };
    }
}

//automatically will cache data.
module.exports = LaunchAPI;
