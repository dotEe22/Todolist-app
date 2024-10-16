import supabase from '../components/client';

export const fetchTodos = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId)
      .order('inserted_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (err) {
    throw new Error('Error fetching todos');
  }
};

export const addTodo = async (task, userId) => {
  try {
    const { data, error } = await supabase
      .from('todos')
      .insert({ task, user_id: userId, is_complete: false })
      .select('*')
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    throw new Error('Error adding todo');
  }
};

export const updateTodoCompletion = async (id, isComplete) => {
  try {
    const { error } = await supabase
      .from('todos')
      .update({ is_complete: isComplete })
      .match({ id });

    if (error) throw error;
  } catch (err) {
    throw new Error('Error updating todo');
  }
};

export const deleteTodo = async (id) => {
  try {
    const { error } = await supabase
      .from('todos')
      .delete()
      .match({ id });

    if (error) throw error;
  } catch (err) {
    throw new Error('Error deleting todo');
  }
};
