//Heterogeneous enums are enums that contain both string and numeric values.

enum Status {
  Active = "ACTIVE",
  Deactivate = 1,
  Pending,
}
console.log(Status.Active);
