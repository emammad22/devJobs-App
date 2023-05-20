import vacancies from './data.json'

export default vacancies.map((vacancy) => {
    const {
        id,
        logo,
        logoBackground,
        company,
        position,
        postedAt,
        contract,
        location,
        website,
        apply,
        description,
        requirements,
        role
    } = vacancy


    return {
        id,
        logo ,
        logoBackground,
        company,
        position,
        postedAt,
        contract,
        location,
        website,
        apply,
        description,
        requirements,
        role
    }
})

