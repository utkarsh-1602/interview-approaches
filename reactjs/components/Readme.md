### Components: 
- Components are reusable pieces of code that represent different parts of a user interface.
- In react, Components  can be defined using **class components** or **functional components**
- In react 16.8, react introduced to use functional components to enhance the performance of components.

- props allow data to be passed from a parent component to a child component.
- Example: Imagine a blog application where you have a Post component. You pass the post details (title, author, content) as props to the Post component from a parent component.
    
        const ProductComponent = (props) => {
        return (
            <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            </div>
        );
        };
    