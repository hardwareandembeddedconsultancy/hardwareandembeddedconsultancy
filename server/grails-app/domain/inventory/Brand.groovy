package inventory

class Brand {

    String name
    Date dateCreated
    Date lastUpdated

    static constraints = {
        name unique:true
    }
}
