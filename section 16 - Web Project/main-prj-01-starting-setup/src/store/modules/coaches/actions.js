export default {
  async registerCoach(context, formData) {
    console.log('action data', formData);
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: formData.first,
      lastName: formData.last,
      description: formData.desc,
      hourlyRate: formData.rate,
      areas: formData.areas
    };

    const response = await fetch(
      `https://fir-app-ca7c9-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    //const resonseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    // Add to VueX after all promises are successful
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },

  async loadCoaches(context, payload) {
    if (!context.getters.shouldUpdate && !payload.forceRefresh) {
      return;
    }
    // Get coaches from Firebase
    const response = await fetch(
      `https://fir-app-ca7c9-default-rtdb.firebaseio.com/coaches.jso`
    );

    const responseData = await response.json();

    if (!response.ok) {
      // error ...
      const error = new Error(responseData.message || 'Failed to Fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };

      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
