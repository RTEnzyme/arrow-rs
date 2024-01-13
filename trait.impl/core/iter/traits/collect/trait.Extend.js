(function() {var implementors = {
"arrow_array":[["impl&lt;P: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;P as <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt;::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type arrow_array::types::ArrowPrimitiveType::Native\">Native</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/primitive_builder/struct.PrimitiveBuilder.html\" title=\"struct arrow_array::builder::primitive_builder::PrimitiveBuilder\">PrimitiveBuilder</a>&lt;P&gt;"],["impl&lt;R, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;V as <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt;::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type arrow_array::types::ArrowPrimitiveType::Native\">Native</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/primitive_run_builder/struct.PrimitiveRunBuilder.html\" title=\"struct arrow_array::builder::primitive_run_builder::PrimitiveRunBuilder\">PrimitiveRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>,</div>"],["impl&lt;O, B, V, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\">GenericListBuilder</a>&lt;O, B&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>,\n    B: <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;E&gt;,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = E&gt;,</div>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/generic_bytes_builder/struct.GenericByteBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;T&gt;"],["impl&lt;K: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow_array::types::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>, T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/generic_bytes_dictionary_builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_dictionary_builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;"],["impl&lt;K: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow_array::types::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>, P: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;P as <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt;::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type arrow_array::types::ArrowPrimitiveType::Native\">Native</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/primitive_dictionary_builder/struct.PrimitiveDictionaryBuilder.html\" title=\"struct arrow_array::builder::primitive_dictionary_builder::PrimitiveDictionaryBuilder\">PrimitiveDictionaryBuilder</a>&lt;K, P&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/boolean_builder/struct.BooleanBuilder.html\" title=\"struct arrow_array::builder::boolean_builder::BooleanBuilder\">BooleanBuilder</a>"],["impl&lt;R, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow_array::builder::generic_byte_run_builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;V::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt;,</div>"]],
"arrow_buffer":[["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/native/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::native::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/builder/struct.BufferBuilder.html\" title=\"struct arrow_buffer::builder::BufferBuilder\">BufferBuilder</a>&lt;T&gt;"],["impl&lt;A: <a class=\"trait\" href=\"arrow_buffer/native/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::native::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/mutable/struct.MutableBuffer.html\" title=\"struct arrow_buffer::buffer::mutable::MutableBuffer\">MutableBuffer</a>"]],
"arrow_schema":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"arrow_schema/field/struct.Field.html\" title=\"struct arrow_schema::field::Field\">Field</a>&gt; for <a class=\"struct\" href=\"arrow_schema/schema/struct.SchemaBuilder.html\" title=\"struct arrow_schema::schema::SchemaBuilder\">SchemaBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"arrow_schema/field/struct.Field.html\" title=\"struct arrow_schema::field::Field\">Field</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_schema/schema/struct.SchemaBuilder.html\" title=\"struct arrow_schema::schema::SchemaBuilder\">SchemaBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"arrow_schema/ffi/flags/struct.Flags.html\" title=\"struct arrow_schema::ffi::flags::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"arrow_schema/ffi/flags/struct.Flags.html\" title=\"struct arrow_schema::ffi::flags::Flags\">Flags</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()