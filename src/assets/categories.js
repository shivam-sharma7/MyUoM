const imgUrl = "https://picsum.photos/1920/1080";

export const Categories = [
  {
    title: "Ακαδημαικό Προσωπικό",
    imgUrl: imgUrl,
    route: "/professors",
    isExternal: false,
    requireSelection: true,
  },
  {
    title: "Εστιατόριο",
    imgUrl: imgUrl,
    route: "/restaurant",
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Φοιτητική Μέριμνα",
    imgUrl: imgUrl,
    route: "https://www.uom.gr/student-care",
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Student's Web",
    imgUrl: imgUrl,
    route: "https://services.uom.gr/unistudent/login.asp",
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Open Eclass",
    imgUrl: imgUrl,
    route: "https://openeclass.uom.gr/",
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Εύδοξος",
    imgUrl: imgUrl,
    route: "https://eudoxus.gr/",
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Υπόλοιπες Υπηρεσίες",
    imgUrl: imgUrl,
    route: "/services",
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Ορκομωσίες",
    imgUrl: imgUrl,
    route: "/graduationpage",
    isExternal: false,
    requireSelection: true,
  },
  {
    title: "Βιβλιοθήκη",
    imgUrl: imgUrl,
    route: "/librarypage",
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Πληροφορίες για πρωτοετής",
    imgUrl: imgUrl,
    route: "/firstyearinfo",
    isExternal: false,
    requireSelection: false,
  },
];
