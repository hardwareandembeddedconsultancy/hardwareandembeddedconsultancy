package crm

class Company {

    String avatar
    String name
    String gst
    String description
    Date establishedDate
    String email
    String mobile
    String website
    String fax
    Date dateCreated
    Date lastUpdated

    static constraints = {

        avatar nullable:true, blank:true
        name unique:true
        gst  nullable: true, blank: true
        description nullable: true, blank: true
        establishedDate nullable: true, blank: true
        fax nullable: true, blank: true
        mobile  unique:true,minSize:10,maxSize: 11,matches:"^[0-9]+"
        email unique:true,email: true
        website unique:true,nullable: true, blank: true

    }

}