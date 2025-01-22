import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
})

type SeacrhFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {

  const {
    register, 
    handleSubmit,
    formState:{ isSubmitting }
  } = useForm<SeacrhFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SeacrhFormInputs) {
    await new Promise(resolve => setTimeout(resolve,2000));
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Search for transactions"
        {...register('query')}
        />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
}