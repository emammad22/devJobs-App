import vacancies from './data.json'

export default vacancies.map((vacancy) => {
    const {
        id,
        company,
        logo,
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
        company,
        logo,
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