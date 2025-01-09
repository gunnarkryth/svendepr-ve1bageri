export const ProductMenu = ({ setId }) => {
  // const (data, isLoading, error) = useGet('https://api.mediehuset.net/bakeonline/categories');

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/categories/$(id)`
  );

  console.log("ProductMenu", data);

  return (
    <div>
      <aside>
        <ul>
          {!isLoading &&
            data?.items.map((item) => {
              return (
                <li key={item.id} onClick={() => setId(item.id)}>
                  {item.title}
                </li>
              );
            })}
        </ul>
      </aside>
    </div>
  );
};
