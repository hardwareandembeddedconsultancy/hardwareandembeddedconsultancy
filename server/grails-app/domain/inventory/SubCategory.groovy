package inventory

class SubCategory {

    String name
    Date dateCreated
    Date lastUpdated

    static constraints = {
        name unique:true
    }
}
