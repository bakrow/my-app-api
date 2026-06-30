

export const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const formatted = result.error.format();
            const flatError = Object.values(formatted).flatMap((field) => field?._errors || []);
            const errorMessage = flatError.join(", ");

            console.log("Validation error:", errorMessage); // Log the validation error for debugging
            
            return res.status(400).json({ error: errorMessage });
        }
        req.body = result.data; // Update req.body with the validated data
        next();
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
    };
}

