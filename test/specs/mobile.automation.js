describe("Open Diet Meal App", () => {
  it("Flow Diet Meal App", async () => {
    const inputName = await $("id=com.fghilmany.dietmealapp:id/et_name");
    const inputWeight = await $("id=com.fghilmany.dietmealapp:id/et_weight");
    const inputHeight = await $("id=com.fghilmany.dietmealapp:id/et_height");
    const chooseGender = await $("id=com.fghilmany.dietmealapp:id/rb_male");
    const btnNext = await $("id=com.fghilmany.dietmealapp:id/bt_next");
    const actRest = await $("id=com.fghilmany.dietmealapp:id/rb_rest");
    const btnFinish = await $("id=com.fghilmany.dietmealapp:id/bt_finish");
    const homepage = await $("id=com.fghilmany.dietmealapp:id/tv_header_desc");

    await inputName.setValue("Naufal");
    await inputWeight.setValue("70");
    await inputHeight.setValue("171");
    await chooseGender.click();
    await btnNext.click();
    await actRest.click();
    await btnFinish.click();
    await expect(homepage).toHaveAttribute("text", "Ready to some calories today?");
  });
});