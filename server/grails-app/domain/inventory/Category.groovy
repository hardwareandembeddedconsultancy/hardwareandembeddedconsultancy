package inventory

class Category {

    String name
    Date dateCreated
    Date lastUpdated

    static constraints = {
        name unique:true
    }

}
