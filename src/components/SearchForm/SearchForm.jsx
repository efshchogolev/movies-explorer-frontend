import { useForm } from "react-hook-form";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({
  onSearch,
  inputValue,
  isActiveCheckbox,
  handleChangeCheckbox,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      searchInput: inputValue || "",
      checkbox: isActiveCheckbox,
    },
  });

  const onSubmit = (data) => {
    onSearch(data.searchInput, data.checkbox);
  };

  return (
    <div className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="search__form-container">
            <input
              className="search__input"
              placeholder="Фильм"
              {...register("searchInput", {
                required: "Введите название фильма",
              })}
            ></input>
            <button type="submit" className="search__find-button"></button>
          </div>
          {errors?.searchInput && (
            <span className="search__error-message">
              {errors?.searchInput?.message || "error"}
            </span>
          )}

          <FilterCheckbox
            formParams={{
              ...register("checkbox", {
                onChange: () => {
                  handleChangeCheckbox(watch("checkbox"));
                },
              }),
            }}
          ></FilterCheckbox>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
