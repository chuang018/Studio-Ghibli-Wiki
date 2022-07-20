export interface Film {
    id: String;
    title: String;
    original_title: String;
    original_title_romanised: String;
    description: String;
    director: String;
    producer: String;
    release_date: String;
    running_time: String;
    rt_score: String;
    people: Array<String>;
    species: Array<String>;
    locations: Array<String>;
    vehicles: Array<String>;
    url: String;

}