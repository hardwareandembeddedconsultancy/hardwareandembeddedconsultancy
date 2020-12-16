package inventory

class Location {
    String name
    String description
    Date dateCreated
    Date lastUpdated

    static constraints = {
        name unique:true
    }
}
