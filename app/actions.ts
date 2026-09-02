"use server";

export async function submitAdmissionRequest(formData: FormData) {
  // Extract data from the form
  const studentName = formData.get("studentName");
  const parentName = formData.get("parentName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const grade = formData.get("grade");

  // Mock server delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("New Admission Request Received:", {
    studentName,
    parentName,
    email,
    phone,
    grade,
  });

  // Here you would typically integrate with a database or email service
  // e.g. await db.insert(admissions).values({...})
  
  return { success: true, message: "Application Submitted!" };
}
